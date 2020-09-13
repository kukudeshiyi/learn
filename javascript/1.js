// 利用javascript的模块机制
const MyModules = (function(){
    const modules = {};
    function define(name,deps,module){
        deps = deps || [];
        for(let i = 0;i<deps.length;i++){
            deps[i] = modules[deps[i]];
        }
        modules[name] = module.apply(module,deps);
    }   
    function get(name){
        return modules[name];
    }
    return {
        define,
        get
    }
})();