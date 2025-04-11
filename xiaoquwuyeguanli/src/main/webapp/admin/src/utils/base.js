const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoquwuyeguanli/",
            name: "xiaoquwuyeguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoquwuyeguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "小区物业管理系统"
        } 
    }
}
export default base
