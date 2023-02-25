<template>
    <div>
        <div class="card-align">July 8 - 14</div>
        <div class="row no-gutters">
            <div v-for="card, idx in current_cards" :key="idx">
                <content-planner-card :status="card.status" :dateTime="card.dateTime" :keyword="card.keyword"></content-planner-card>
            </div>
        </div>
        <div class="card-align">July 1 - 7</div>
        <div class="row no-gutters">
            <div v-for="card, idx in published_cards" :key="idx">
                <content-planner-card :status="card.status" :dateTime="card.dateTime" :keyword="card.keyword"></content-planner-card>
            </div>
        </div>
    </div>
</template>

<script>
import cards_data from "@/data/cardsData.json";
import contentPlannerCard from './contentPlannerCard.vue';
export default {
  components: { contentPlannerCard },
    mounted() {
        let current_cards = []
        let published_cards = cards_data.cards && cards_data.cards.filter(card => {
            let date_string = card.dateTime.substring(0, card.dateTime.indexOf(","))
            let date = date_string.match(/\d/g);
            date = date.join("");
            date > 7 ? current_cards.push(card) : ''
            return date < 7;
        })
        this.published_cards = published_cards
        this.current_cards = current_cards
    },
    data() {
        return {
            published_cards: [],
            current_cards: [],
        }

    },

}
</script>
