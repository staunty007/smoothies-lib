<template>
  <div class="index container">
    <div class="row">
      <div class="col s4"  v-for="smoothie in smoothies" :key="smoothie.id">

        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="https://media-cdn.tripadvisor.com/media/photo-s/0f/4b/ac/1d/we-loved-it-even-on-a.jpg">
          </div>
          <div class="card-content">
            <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
            <span class="card-title activator grey-text text-darken-4">
              <ul class="ingredients">
                <li v-for="(ing,index) in smoothie.ingredients" :key="index">
                <span class="chip">{{ ing }}</span>
                </li>
              </ul>
              <router-link :to="{ name: 'EditSmoothie', params: {smoothie_slug: smoothie.slug} }">
                
              <i class="material-icons right">medit</i>
              </router-link>
            </span>
            <p><a href="#">{{ smoothie.title }}</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              {{ smoothie.title }}
              <i class="material-icons right">close</i></span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'Index',
  data () {
    return {
      smoothies: []
    }
  },
  methods: {
    deleteSmoothie(id) {
      //delete doc from firestore
      db.collection('smoothies').doc(id).delete()
      .then(() => {
        this.smoothies = this.smoothies.filter(smoothie => {
          return smoothie.id != id
        });
      })
    }
  },
  created() {
    //fetch data from firestore
    db.collection('smoothies').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let smoothie = doc.data()
        smoothie.id = doc.id
        this.smoothies.push(smoothie)
      })
    })
  }
}
</script>

<style>
.ingredients {
  margin: 30px auto;
}
.ingredients li {
  display: inline-block;
}
.delete {
  position: absolute;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>
