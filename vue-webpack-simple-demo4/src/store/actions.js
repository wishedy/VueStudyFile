const actions = {//主要是处理数据
    addData: ({
                  commit
              }) => {
        commit("addData0")
    },
    deData:({
                commit
            })=>{
        commit("deData0")
    },
    oddData:({
                 commit
             })=>{
        commit("oddData0")
    },
    evenData:({
                  commit
              })=>{
        commit("evenData0");
    }
};
export default actions