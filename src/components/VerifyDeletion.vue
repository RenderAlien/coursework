<script>
import { useCounterStore } from '../../store/store';

export default{
    name: 'VerifyModal',
    setup() {
        const store = useCounterStore();
        return {store}
    }
}
</script>

<template>
  <div v-if="store.show_modal" class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Удаление</h5>
          <button type="button" class="btn-close" @click="store.id_to_delete=''; store.show_modal=false"></button>
        </div>
        <div class="modal-body">
          <p>Вы точно хотите удалить файл?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="store.id_to_delete=''; store.show_modal=false">Нет</button>
          <button type="button" class="btn btn-primary" @click="store.to_delete.push(store.id_to_delete); console.log(store.to_delete); store.id_to_delete=''; store.show_modal=false">
            Да
          </button>
        </div>
      </div>
    </div>
  </div>
</template>