const getters = {
    count(state){
        return state.count;
    },
    isOdd(state){
        if(state.count%2===0){
            return "偶数"
        }else{
            return "奇数";
        }
    }
};
export  default getters