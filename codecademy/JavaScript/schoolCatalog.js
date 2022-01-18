class School {
  constructor(name, level, numStudents) {
    this._name = name
    this._level = level
    this._numStudents = numStudents
  }

  get name() { return this._name }
  get level() { return this._level }
  get numStudents() { return this._numStudents }

  set numStudents(n) {
    if (typeof n === 'number') {
      this._numStudents = n
    } else {
      console.log('Invalid input: numStudents must be set to a Number.')
    }
  }

  quickFacts() {
    console.log(
      `${this._name} educates ${this._numStudents} students at the ${this._level} school level.`
    )
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randomTeacher =
      Math.floor(Math.random() * (substituteTeachers.length - 1))
    console.log(substituteTeachers[randomTeacher])
  }
}

class PrimarySchool extends School {
  constructor(name, numStudents, pickupPolicy) {
    super(name, 'primary', numStudents)
    this._pickupPolicy = pickupPolicy
  }

  get pickupPolicy() { return this._pickupPolicy }
}

class MiddleSchool extends School {
  constructor(name, numStudents) {
    super(name, 'middle', numStudents)
  }
}

class HighSchool extends School {
  constructor(name, numStudents, sportsTeams) {
    super(name, 'high', numStudents)
    this._sportsTeams = sportsTeams
  }

  get sportsTeams() {
    for (let team of this._sportsTeams)
      console.log(team)
  }
}

const lorraineHansbury = new PrimarySchool(
  'Lorraine Hansbury', 514,
  'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
)

const alSmith = new HighSchool(
  'Al E. Smith', 415,
  ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
)

lorraineHansbury.quickFacts()
School.pickSubstituteTeacher(
  ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']
)

alSmith.sportsTeams
