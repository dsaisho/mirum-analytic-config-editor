<template>
  <keep-alive>
    <v-layout column>
      <SubHeader title="Outputs View" description="*view your project outputs"/>
      <v-expansion-panel class="mb-3">
        <v-expansion-panel-content>
          <template v-slot:header>
            <div>Output Tables</div>
          </template>
          <v-flex xs12>
            <ProjectList :datasets="outputDatasets"/>
          </v-flex>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-flex v-if="this.readyToShowTable">
        <ViewTable :fileName="this.fileName" :dataSet="this.dataSet" uid="outputTable"/>
      </v-flex>
    </v-layout>
  </keep-alive>
</template>


<script>
import ProjectList from "@/components/project-list/ProjectList.vue";
import ViewTable from "@/components/view-table/ViewTable.vue";
import SubHeader from "@/components/headers/SubHeader.vue";
export default {
  name: "OutputsView",
  components: {
    ProjectList,
    ViewTable,
    SubHeader
  },

  computed: {
    fileName() {
      return this.$store.state.activeFile;
    },
    dataSet() {
      return this.$store.state.activeDataset;
    },
    readyToShowTable() {
      return this.$store.getters.readyToShowTable;
    },
    outputDatasets() {
      return this.$store.getters.outputDatasets;
    }
  },
  data() {
    return {};
  },
  watch: {},
  mounted() {},
  methods: {}
};
</script>
