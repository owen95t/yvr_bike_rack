<template>
  <div class="locations">
    <h1 class="text-center">YVR Bike Rack Locations</h1>
<!--    <pre>{{this.formatted}}</pre>-->
    <h3 class="text-center">Total Locations of Racks: {{data.length}}</h3>

<!--    <pre>{{data}}</pre>-->
    <MapView />
    <b-container>
      <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
          class="justify-content-center"
          style="margin-top: 15px"
          first-text="First"
          last-text="Last">
      </b-pagination>
    </b-container>
    <b-container>
      <b-table
          hover
          bordered
          responsive="sm"
          :items="this.formatted"
          :fields="tableFields"
          :per-page="perPage"
          :current-page="currentPage">
      </b-table>
    </b-container>

<!--    <ul>-->
<!--      <li v-for="item in data" v-bind:key="item.recordid">{{item.fields.street_number + " " + item.fields.street_name}}</li>-->
<!--    </ul>-->
  </div>
</template>

<script>
import json from '/src/assets/bike-racks.json'
import MapView from "@/components/MapView";

export default {
  name: "Locations",
  components: {MapView},
  data() {
    return {
      data: json,
      formatted: [],
      locations: '',
      perPage: 10,
      currentPage: 1,
      tableFields: [{
        key: 'streetNumber',
        label: 'Street Number'
      }, {
        key: 'streetName',
        label: 'Street Name'
      }, {
        key: 'city',
        label: 'City'
      }, {
        key: 'province',
        label: 'Province'
      }, {
        key: 'numberOfRacks',
        label: 'Number of Racks'
      }]
    }
  },
  methods: {
    createList() {
      for(let obj in json){
        //this.formatted.push({id: obj.recordid, streetName: obj.fields.street_name, streetNumber: obj.fields.street_number})
        //console.log("Record ID: " + json[obj].recordid)
        this.formatted.push({id: json[obj].recordid, streetName: json[obj].fields.street_name, streetNumber: json[obj].fields.street_number, city: "Vancouver", province: "BC", numberOfRacks: json[obj].fields.number_of_racks})
      }
      // for (let i = 0; i < json.length; i++) {
      //   this.formatted.push({id: json[i].recordid, streetName: json[i].fields.street_name, streetNumber: json[i].fields.street_number})
      // }
      //console.log(this.formatted)
      //console.log(this.formatted.length)
    }
  },
  mounted() {
    this.createList()
  },
  computed: {
    rows() {
      return this.data.length
    }
  }
}
</script>

<style scoped>

</style>