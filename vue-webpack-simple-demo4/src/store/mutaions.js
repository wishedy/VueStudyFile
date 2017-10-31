const mutations = {//处理数据的变化
    addData0(state){
        state.count++;
    },
    deData0(state){
        state.count--;
    },
    oddData0(state){
        if(state.count%2===1){
            state.count++;
        }
    },
    evenData0(state){
        if(state.count%2===0){
            state.count++;
        }
    }
};
export default mutations
