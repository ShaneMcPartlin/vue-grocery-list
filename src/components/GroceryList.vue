<script lang="ts">
import GroceryListItem from "./GroceryListItem.vue"

interface ListItem {
  name: string
  id: number
  checked: boolean
}

let id = 0
export default {
  components: {
    GroceryListItem
  },
  data() {
    return {
      groceryList: [] as ListItem[],
      listItemInput: "",
      showDeletedItems: false
    }
  },
  methods: {
    addListItem(item: string) {
      this.groceryList.push({ name: item, id: id++, checked: false } as ListItem)
      this.listItemInput = ""
    },
    deleteListItem(item: ListItem) {
      const targetIndex = this.groceryList.indexOf(item)
      this.groceryList.splice(targetIndex, 1)
    },
    toggleShowDeletedItems() {
      this.showDeletedItems = !this.showDeletedItems
    }
  },
  watch: {
    groceryList() {
      console.log("grocery list has changed")
    }
  },
  computed: {
    filteredGroceryList() {
      return this.groceryList.filter((item) => !item.checked)
    },
    toggleListButtonText() {
      return this.showDeletedItems ? "Hide deleted items" : "Show deleted items"
    }
  }
}
</script>

<template>
  <div class="flex-column">
    <input
      class="text-input"
      title="listItemInput"
      placeholder="type something to remember..."
      v-model="listItemInput"
      @keyup.enter="addListItem(listItemInput)"
    />
    <button class="toggle-button" @click="toggleShowDeletedItems()">
      {{ toggleListButtonText }}
    </button>
    <div v-if="!showDeletedItems">
      <GroceryListItem
        @deleteListItem="(item) => deleteListItem(item)"
        :groceryList="filteredGroceryList"
      />
    </div>
    <div v-else>
      <GroceryListItem
        @deleteListItem="(item) => deleteListItem(item)"
        :groceryList="groceryList"
      />
    </div>
  </div>
</template>

<style>
.toggle-button {
  background-color: rgba(0, 0, 0, 0);
  color: #ebebeba3;
  border: 2px solid #ebebeba3;
  border-radius: 16px;
  height: 32px;
  font-size: 16px;
  transition: 0.2s;
  margin: 4px;
}

.toggle-button:hover {
  color: #00bd7e;
  border: 2px solid #00bd7e;
  transition: 0.2s;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.text-input {
  height: 32px;
  margin: 4px;
}
</style>
