export default {
  data() {
    return {
      items: [],
      itemsPerPage: 10,
      itemsAvailablePerPage: [],
      numTabs: 0,
      foo: 0
    };
  },
  methods: {
    pagination() {
      return (this.itemsAvailablePerPage = this.items.slice(
        this.itemsPerPage * (this.$store.state.numPage - 1),
        this.$store.state.numPage * this.itemsPerPage + 1
      ));
    }
  }
};
