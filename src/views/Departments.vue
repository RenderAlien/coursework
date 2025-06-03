<script setup>
import { useCounterStore } from '../../store/store';

const store = useCounterStore();
</script>

<template>
  <div v-for="department in ['HR', 'Finances', 'Head']" class="container">
    <RouterLink class="content-text" to="/dep" @click="store.current_department=department">Отдел {{ department }} ></RouterLink>
    <div class="row justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1">
      <div v-for="item in store.dep_lastn(department, 4)" class="d-flex justify-content-center mb-4">
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
</template>