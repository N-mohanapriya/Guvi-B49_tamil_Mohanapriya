class movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = "PG";
    }
  
    getrating() {
      return "the rating is  " + this.rating;
    }
  }
  
  const CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");