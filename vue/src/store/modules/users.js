import axios from 'axios'
export default {
	name : 'users',
	namespaced : true,
	state : {
		user : {},
		context : 'http://localhost:8080/', 
		userName : '박근호'
	},
	getters : {
		getUser : state => state.user,
		getContext : state => state.context,
		getUserName : state => state.userName
	},
	actions : {
		login({commit},{uid,pwd,context}){
			alert(`넘어온 아이디 ${uid} ${pwd}`)
			let url = `${context}login`
			let headers = {
            'authorization': 'JWT fefege..',
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
			}
			axios
			.post(url, {uid,pwd},headers)
			.then(({data})=>{commit('LOGIN',data)})
			.catch(()=>{alert(`axios실패`)})
		}
	},
	mutations : {
		LOGIN(state, data){
			alert(`뮤테이션 들어옴`)
			state.user = data.user
			alert(`로그인 성공${state.user}`)
		}
	}
}
