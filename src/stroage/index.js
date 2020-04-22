const STROGE_KEY = 'mall';

export default{
    setItem(key , value , module_name){
        if(module_name){
            let val = this.getItem(key);
            val[key] = value;
            this.setItem(module_name , val)
        }else{
            let val = this.getStroage();
            val[key] = value;
            window.localStorage.setItem(STROGE_KEY,JSON.stringify(val));
        }
    },
    getItem(key,module_name){
        if(module_name){
            let val = this.getStroage(module_name);
            if(val) return val[key]
        }
        return this.getStroage()[key]
    },
    getStroage(){
       return JSON.parse(window.localStorage.getItem(STROGE_KEY) || '{}')
    },
    clear(key,module_name){
        let val = this.getStroage()
        if(module_name){
            if(!val[module_name])return 
            delete val[module_name][key]
        }else{
            delete val[key];
        }
        window.localStorage.setItem(STROGE_KEY,JSON.stringify(val));
    }
}