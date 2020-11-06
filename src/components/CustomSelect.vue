<template>
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
        <div class="selected" :class="{ open: open }" @click="open = !open" >
            {{ selectedToShow }}
        </div>
        <div class="items" :class="{ selectHide: !open }">
            <div
                v-for="(option, i) of options"
                :key="i"
                @click="optionSelected(option, i)"
            >
                {{ option }}
            </div>
        </div>
    </div>
</template>

<script>
// import {i18n} from "@/plugins/i18n";

export default {
    name: "CustomSelect.vue",
    props: {
        options: {
            type: Array,
            required: true,
        },
        default: {
            type: String,
            required: false,
            default: null,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    data() {
        return {
            selected: this.default,
            selectedId: 1,
            open: false,
        };
    },
    computed: {
        selectedToShow() {
            return this.$t(`option${this.selectedId}`);
        }
    },
    mounted() {
        this.$emit("input", this.selected);
    },
    methods: {
        optionSelected(option, i){
            this.selected = option;
            this.selectedId = i + 1;
            this.open = false;
            this.$emit('input', option);
        },
    },
}
</script>

<style scoped>
.custom-select {
    position: relative;
    width: 135px;
    text-align: left;
    text-decoration: underline;
    text-decoration-color: paleturquoise;
    outline: none;
    height: 47px;
    line-height: 47px;
    z-index: 2;
}

.custom-select .selected {
    background-color: #fff;
    color: black;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
}

.custom-select .selected.open {
    border: 1px solid black;
}

.custom-select .selected:after {
    position: relative;
    content: "";
    top: 13px;
    left: 5px;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: black transparent transparent transparent;
}

.custom-select .items {
    color: white;
    overflow: hidden;
    border-right: 1px solid black;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    position: absolute;
    background-color: white;
    left: 0;
    right: 0;
    z-index: 1;
}

.custom-select .items div {
    color: black;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
}

.custom-select .items div:hover {
    background-color: paleturquoise;
}

.selectHide {
    display: none;
}
</style>