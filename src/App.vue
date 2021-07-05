<template>
    <div id="text">
        <h1>{{text}}</h1>
    </div>
</template>

<script>
export default {
    name: 'app',
    data(){
        return {
            text: 'Welcome'
        }
    }
}
</script>

 <style>
    #text {
        color: brown;
    }
 </style>