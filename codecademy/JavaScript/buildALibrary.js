class Media {
  constructor(title) {
    this._title = title
    this._isCheckedOut = false
    this._ratings = []
    this._catalog.push(this)
  }


  get title() { return this._title }
  get isCheckedOut() { return this._isCheckedOut }
  get ratings() { return this._ratings }

  set isCheckedOut(bool) { this._isCheckedOut = bool }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut
  }

  getAverageRating() {
    const ratingsSum = this._ratings.reduce(
      (sum, rating) => sum + rating, 0
    )
    return ratingsSum / this._ratings.length
  }

  addRating(newRating) {
    if (newRating > 0 && newRating < 6) {
      this._ratings.push(newRating)
    } else {
      console.log("Rating must be between 1 and 5")
    }
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title)
    this._author = author
    this._pages = pages
  }

  get author() { return this._author }
  get pages() { return this._pages }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title)
    this._director = director
    this._runTime = runTime
  }

  get director() { return this._director }
  get runTime() { return this._runTime }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title)
    this._artist = artist
    this._songs = songs
  }

  shuffle() {
    // Fisher-Yates Algorithm (Durstenfeld Shuffle)
    const songs = this._songs.slice()
    for (let i = songs.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = songs[i]
      songs[i] = songs[j]
      songs[j] = temp
    }
    return songs
  }
}

const historyOfEverything = new Book(
  'Bill Bryson', 'A Short History of Nearly Everything', 544
)

const speed = new Movie(
  'Jan de Bont', 'Speed', 116
)

// book instance
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())

// movie instance
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())

