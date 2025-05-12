<template>
    <div v-for="info in infos" :key="info.id" class="faq">
        <SingleInfo :info="info"></SingleInfo>
    </div>
    <div class="btn">
        <button class="faq-button">See More</button>
    </div>
</template>

<script>
import SingleInfo from './SingleInfo'
export default {
  components: { SingleInfo },
  props: ['infos']

}
</script>

<style>
    .faq {
        margin-bottom: 15px;
    }

    .btn {
        text-align: center;
        margin: 20px auto;
    }

    .faq-button {
        display: inline-block;
        padding: 8px;
        background-color: #7E99A3;
        color: #fff;
        border-radius: 5px;
        border: none;
        font-size: 16px;
        cursor: pointer;
    }

    .faq-button:hover {
        background-color: #BCCCDC;
        color: #4C585B;
    }
</style>