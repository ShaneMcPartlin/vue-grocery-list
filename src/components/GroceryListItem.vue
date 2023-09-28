<script lang="ts">
interface ListItem {
  name: string
  id: number
  checked: boolean
}
export default {
  emits: ["deleteListItem"],
  props: {
    groceryList: Array<ListItem>
  },
  methods: {
    emitDeleteListItem(item: ListItem) {
      this.$emit("deleteListItem", item)
    }
  }
}
</script>

<template>
  <p v-if="!groceryList?.length"><i>The list is empty</i></p>
  <div class="flex-row space-between" v-for="listItem in groceryList" :key="listItem.id">
    <div class="flex-row">
      <input
        class="checkbox"
        :id="listItem.id.toString()"
        type="checkbox"
        v-model="listItem.checked"
      />
      <label :for="listItem.id.toString()" :class="{ strikethrough: listItem.checked }">
        {{ listItem.name }}</label
      >
    </div>
    <button class="delete-button" @click="emitDeleteListItem(listItem)">x</button>
  </div>
</template>

<style>
.strikethrough {
  text-decoration: line-through;
  color: #ebebeba3;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.space-between {
  justify-content: space-between;
}

.checkbox {
  margin-right: 4px;
}

.delete-button {
  background-color: #00000000;
  border-radius: 16px;
  border: 2px solid #00000000;
  color: #ebebeba3;
  transition: 0.25s;
}

.delete-button:hover {
  color: #e73939;
  border-color: #e73939;
  transition: 0.25s;
  border: 2px solid;
}
</style>
