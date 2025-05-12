import { ref } from "vue";

let getInfos = () => {
    let infos = ref([]);
    let error = ref("");

    let load = async() => {
      try{
        let response = await fetch("http://localhost:3000/faqs");
        if(response.status === 404) {
          throw new Error("Not found URL")
        }
        let datas = await response.json()
        infos.value = datas
      } catch(err) {
        error.value = err.message
      }
    };
    return {infos, error, load};
}

export default getInfos;