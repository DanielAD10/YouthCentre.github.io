<template>
  <div class="tag-cloud">
    <div>
        <h3>
            Course Tags
            <span class="refresh-icon" @click="clearActiveTag">🔄</span>
        </h3>
        
    </div>
    <div class="tags">
        <div v-for="tag in uniqueTags" :key="tag">
            <router-link :to="{name:'tag', params:{tag}}" :class="{ 'router-link-active': activeTag === tag }"
            @click.prevent="setActiveTag(tag)">
                <span>{{ tag }}</span>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    props: ['posts'],
    setup(props) {
        let tags = ref([]);
        let activeTag = ref(null);
        let router = useRouter();

        props.posts.forEach((post) => {
            post.tags.forEach((tag)=>{
                tags.value.push(tag);
            })
        });

        let uniqueTags = tags.value.filter((tag,index, array)=>{
            return array.indexOf(tag) === index
        })

        let setActiveTag = (tag) => {
            activeTag.value = tag;
            router.push({ name: "tag", params: { tag } });
        };

        let clearActiveTag = () => {
            activeTag.value = null;
            router.push({ name: "home" });
        };

        // console.log(uniqueTags)
        return {uniqueTags, tags, activeTag, clearActiveTag, setActiveTag}
    }
}
</script>

<style>
    .tag-cloud {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
}

.tag-cloud h3 {
  color: #6d6e71;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.refresh-icon {
  font-size: 18px;
  cursor: pointer;
  color: #6d6e71;
  transition: transform 0.3s ease;
  border: none;
}

.refresh-icon:hover {
  transform: rotate(180deg);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px 0;
}

.tags a {
  display: inline-block;
  font-size: 13px;
  color: #fff;
  text-decoration: none;
  background: #6d6e71;
  padding: 6px 12px;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.tags a:hover {
  background: #4a4b4d;
  transform: scale(1.05);
}

.tags a.router-link-active {
    color: #fff;
    background-color: #4a4b4d;
}

</style>