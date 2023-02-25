<template>
    <div :class="{ 'dotted-border': !status }" class="card card-decoration" :style="{ backgroundColor: background_color }">
        <div :style="{ color: color_status }" class="date-time-box">{{ dateTime }}</div>
        <img v-if="status" :src="url" class="image-align"/>
        <div class="button select-post text-center" v-else>Select post</div>
        <div :style="{ color: color_status }" class="status-box" v-if="status">
            <v-icon :class="fa_icon_mapping" class="icon-font"></v-icon>
            {{ status }}
        </div>
    </div>
</template>

<script>
//col-xs-2 col-sm-4 col-md-4 col-lg-3 
export default {
    mounted() {
            this.$axios.get(`https://api.unsplash.com/search/photos?client_id=ZrE290r0iPVw71hCF2aGMW4gzpiKQ1tMlz81pGuJ7PQ&page=1&query=${this.keyword}&per_page=1`)
            .then((response) => {
                this.url = response.data && response.data.results[0].urls.thumb;
                return response.data && response.data.results[0].urls.full;
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    data() {
        return {
            url: "",
            color_mapping: this.$store.getters["static_all/get_color_mapping"],
            icon_mapping: this.$store.getters["static_all/get_status_icon_mapping"],
            background_color_mapping: this.$store.getters["static_all/get_background_color_mapping"],
        }

    },
    props: {
        status: String,
        dateTime: String,
        keyword: String
    },
    computed: {
        color_status() {
            return this.color_mapping[this.status]
        },
        fa_icon_mapping() {
            return this.icon_mapping[this.status]
        },
        background_color() {
            return this.background_color_mapping[this.status]
        },
    },
}
</script>