
Vue.component('users',{
    template : '#usersTemplate',
    mounted() {
        axios.get('https://randomuser.me/api/?results=50')
                .then((data)=>{
                   const listUsers = data.data.results.map((item) => {
                       return{
                           name:`${item.name.title} ${item.name.first} ${item.name.last}`,
                           email: item.email,
                           photo: item.picture.medium,
                       };
                    });
                    this.users = listUsers;
                });
    },
    data() {
        return {
            users : [],
            searchUser: '',
        };
    },
    computed: {
        searchUsers(){
            return this.users.filter((item) => {
                return item.name.includes(this.searchUser);
            });
        },
    },
});

Vue.component('user', {
    props:['data'],
    template :'#userTemplate',
});

new Vue({
    el:'#app',
});