import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () => ({
        // документы: айди, имя в приложении, описание, отделы(к которым документ относится), дата добавления, имя файла
        docs:[
            {id: '00000000', name: 'example1', description: '1st description', departments: ['HR'], date: '01.01.2025', filename: 'example1.docx'},
            {id: '00000001', name: 'example2', description: '2nd description', departments: ['Finances'], date: '02.01.2025', filename: 'example2.docx'},
            {id: '00000002', name: 'example3', description: '3rd description', departments: ['HR', 'Finances'], date: '02.01.2025', filename: 'example3.docx'},
            {id: '00000003', name: 'example4', description: '4th description', departments: ['HR'], date: '03.01.2025', filename: 'example4.docx'},
            {id: '00000004', name: 'example5', description: '5th description', departments: ['HR'], date: '03.01.2025', filename: 'example5.docx'},
            {id: '00000005', name: 'example6', description: '6th description', departments: ['Finances'], date: '03.01.2025', filename: 'example6.docx'},
            {id: '00000006', name: 'example7', description: '7th description', departments: ['HR'], date: '05.01.2025', filename: 'example7.docx'},
            {id: '00000007', name: 'example8', description: '8th description', departments: ['Head'], date: '09.01.2025', filename: 'example8.docx'},
            {id: '00000008', name: 'example9', description: '9th description', departments: ['HR'], date: '09.01.2025', filename: 'example9.docx'},
            {id: '00000009', name: 'example10', description: '10th description', departments: ['Finances'], date: '09.01.2025', filename: 'example10.docx'},
            {id: '00000010', name: 'example11', description: '11th description', departments: ['HR', 'Finances'], date: '10.01.2025', filename: 'example11.docx'},
            {id: '00000011', name: 'example12', description: '12th description', departments: ['HR'], date: '10.01.2025', filename: 'example12.docx'},
            {id: '00000012', name: 'example13', description: '13th description', departments: ['HR'], date: '13.01.2025', filename: 'example13.docx'},
            {id: '00000013', name: 'example14', description: '14th description', departments: ['Finances'], date: '14.01.2025', filename: 'example14.docx'},
            {id: '00000014', name: 'example15', description: '15th description', departments: ['HR'], date: '17.01.2025', filename: 'example15.docx'},
            {id: '00000015', name: 'example16', description: '16th description', departments: ['Head'], date: '21.01.2025', filename: 'example16.docx'},
            {id: '00000016', name: 'example17', description: '17th description', departments: ['HR'], date: '22.01.2025', filename: 'example17.docx'},
            {id: '00000017', name: 'example18', description: '18th description', departments: ['Finances'], date: '23.01.2025', filename: 'example18.docx'},
            {id: '00000018', name: 'example19', description: '19th description', departments: ['HR', 'Finances'], date: '23.01.2025', filename: 'example19.docx'},
            {id: '00000019', name: 'example20', description: '20th description', departments: ['Finances','HR'], date: '25.01.2025', filename: 'example20.docx'},
            {id: '00000020', name: 'example21', description: '21th description', departments: ['HR'], date: '26.01.2025', filename: 'example21.docx'},
            {id: '00000021', name: 'example22', description: '22th description', departments: ['Finances'], date: '26.01.2025', filename: 'example22.docx'},
            {id: '00000022', name: 'example23', description: '23th description', departments: ['HR'], date: '26.01.2025', filename: 'example23.docx'},
            {id: '00000023', name: 'example24', description: '24th description', departments: ['Head'], date: '29.01.2025', filename: 'example24.docx'},
        ],
        show_modal: false, // показ модалки запроса на удаление
        id_to_delete: '', // запрошенный на удаление id. тут находится id, когда открыта VerifyModal, чтобы не потерять id, который хотим удалить
        to_delete: [], // id документов, которые запросили удалить
        current_search: '', // поисковой запрос
        current_department: '', // текущий отдел, нужен для просмотра определенного отдела
        my_first_name: 'Firstname', // имя сотрудника
        my_second_name: 'Secondname', // фамилия сотрудника
        my_department: 'HR', // мой отдел, от него зависит страница моего отдела и 4 карточки на главной
    }),
    getters: {
        // последние n документов
        lastn: (state) => (n) => {
            return state.docs.slice(state.docs.length - n);
        },
        // последние n документов с отделом department
        dep_lastn: (state) => (department, n) => {
            const curr = state.docs.filter((doc) => doc.departments.includes(department));
            return curr.slice(Math.max(0, curr.length - n))
        },
        // все документы с отделом department
        dep: (state) => (department) => {
            return state.docs.filter((doc) => doc.departments.includes(department))
        },
        //путь к картинке для документа. картинка для документа задается первым отделом в списке отделов документа
        image: () => (item) => {
            return "../../store/files/" + String(item.departments[0]) + ".jpg"
        },
        //путь к файлу (для скачивания)
        filepath: () => (item) => {
            return "../../store/files/" + item.filename
        },
        //поиск (именам, описаниям, отделам)
        search: (state) => (query) =>{
            return state.docs.filter((item) => item.name.includes(query) || item.description.includes(query) || item.departments.includes(query))
        }

    },
    actions:{
        // добавляет id документа в массив запросов на удаление
        request_to_delete(id) {
            this.id_to_delete = id;
            this.show_modal = true;
            console.log(this.id_to_delete);
        }
    }
});