<script >
import VerifyModal from './components/VerifyDeletion.vue'
import { useCounterStore } from '../store/store';

export default {
  components: {
    VerifyModal
  },
  setup() {
    const store = useCounterStore();
    return { store };
  }
}
</script>

<template>

  <VerifyModal :show="store.show_modal" @close="store.show_modal = false"/>

  <div class="row general">
    <!--Sidebar-->
    <div class="col-2 bg-warning sidebar">
      <div class="row"><RouterLink class="sidebar-link" to="/">Главная</RouterLink></div>
      <div class="row"><RouterLink class="sidebar-link" to="/dep" @click="store.current_department=store.my_department">Мой отдел</RouterLink></div>
      <div class="row"><RouterLink class="sidebar-link" to="/deps">Отделы</RouterLink></div>
      <div class="row personal" style="margin-top: 45vh;">{{ store.my_first_name }}</div>
      <div class="row personal">{{ store.my_second_name }}</div>
      <div class="row personal">Отдел: {{ store.my_department }}</div>
    </div>

    <div class="col-10 bg-primary content">
      <!--Header-->
      <div class="row bg-light header">
        <div class="col-4">
          <RouterLink class="logo d-md-block d-none" to="/">Облако</RouterLink>
        </div>
        <div class="col-4">
          <div class="search-container" style="width: 20vw; margin-left: 2vw; margin-top: 4vh;">
            <form class="d-flex">
              <input 
                class="form-control" 
                type="search" 
                placeholder="Поиск..." 
                aria-label="Поиск"
                v-model="store.current_search"
              >
            </form>
          </div>
        </div>
      </div>

      <!--Если нет поискового запроса, показываем страницу-->
      <div v-if="store.current_search==''" class="row page-container">
        <RouterView />
      </div>
      <!--Иначе показываем результат поискового запроса-->
      <div v-else class="row page-container">
        <div class="content-text">Поиск по {{ store.current_search }}:</div>
        <div class="container">
          <div class="row justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1">
            <div v-for="item in store.search(store.current_search)" class="d-flex justify-content-center mb-4">
              <!--Карточка документа-->
              <div class="card h-100" style="width: 290px;">
                <img :src="store.image(item)" class="card-img-top card-image" alt="...">
                <div class="card-body">
                  <h5 class="card-title">{{ item.name }}</h5>
                  <p class="card-text">{{ item.description }}</p>
                  <div class="d-flex" style="width: 100%">
                      <a :href="store.filepath(item)" class="btn btn-primary" download>Скачать</a>
                      <div class="btn btn-primary" style="margin-left: 5px;" @click="store.request_to_delete(item.id)">Запрос на удаление</div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>