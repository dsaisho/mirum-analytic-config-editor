<template>
  <v-flex>
    <v-card v-for="(dataset,key) in datasets" :key="key" class="pa-1 mb-3" >
      <h2>
        <v-icon class="light-blue--text">folder</v-icon>
        {{dataset.data.id}}
      </h2>
      <v-list>
        <v-list-tile
          v-for="(file,key) in dataset.data.files"
          :key="key"
          :dataset="dataset.data.id"
          :file-name="file.name"
          v-on:click="fileClicked"
        >
          <v-list-tile-action>
            <v-icon color="teal">insert_drive_file</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="file.name"></v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-avatar v-if="false">
            <v-icon color="teal">star</v-icon>
          </v-list-tile-avatar>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>


export default {
  name: "UpdateDataset",
  props:["datasets"],
  methods: {
    fileClicked(e) {
      //TODO: maybe make a getAttribute method in a utils class. getAttr("file-name", e)
      const activeFile = e.target.offsetParent.getAttribute("file-name");
      const datasetName = e.target.offsetParent.getAttribute("dataset");
      this.$store.commit("SET_ACTIVE_FILE", [
        activeFile,
        datasetName
      ]);
    }
  }
};
</script>
