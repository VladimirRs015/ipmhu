<template>
  <div id="newsList">
    <article class="newsArticle" v-for="anews in news" :key="anews._id">
      <h2 class="newsTitle">{{anews.title}}</h2>
      <p class="newsDate">{{localDate(anews.date)}}</p>
      <div class="newsImageContainer">
        <img class="newsImage" :src="anews.images" alt />
      </div>
      <p class="newsBody">{{anews.newsBody}}</p>
    </article>
  </div>
</template>

<script>
import axios from "axios";
// import Service_getNews from '../services/getNews.js'
export default {
  name: "newsList",
  data() {
    return {
      news: []
    };
  },
  methods: {
    getNews() {
      console.log('1')
      let token = this.$session.get("jwt");
      axios.get("http://localhost:4000/news", {
        headers: {
          withCredentials: true,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:4000",
          "Access-Controll-Allow-Methods": "GET PUT UPDATE DELETE",
          Authorization: "Bearer " + token //the token is a variable which holds the token
        }
      }); 
    },
    localDate: function(date) {
      //   return date.toLocalDateString();
      return new Date(date).toLocaleDateString();
    }
  },
  created() {
    this.getNews();
  }
};
</script>

<style scoped>
#newsList {
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  align-items: center;
}
.newsArticle {
  background-color: var(--shadown);
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  max-width: 900px;
  margin-bottom: 200px;
  padding: 20px 30px 20px 30px;
  border-radius: 30px;
  transition: all 0.2s ease-in;
  box-shadow: 0 0 2px 2px var(--primary-color);
}
.newsArticle:hover {
  box-shadow: 0 0 5px 5px var(--primary-color);
}

.newsDate {
  flex: 0 1 auto;
  text-align: right;
  margin-bottom: 10px;
  font-size: 1.2em;
  font-weight: 700;
}
.newsTitle {
  flex: 0 1 auto;
  color: var();
  margin-bottom: 10px;
}
.newsImageContainer {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.newsImage {
  flex: 0 1 auto;
  width: 100%;
  border-radius: 10px;
  max-width: 700px;
  justify-self: center;
}
.newsBody {
  flex: 0 1 auto;
  max-width: 700px;
}
</style>