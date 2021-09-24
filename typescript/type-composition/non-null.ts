type Resident = {
  familyName: string
  lastName: string
  mon?: Resident
}

const getMomName = (resident: Resident): string => resident.mon.lastName

const patty = { familyName: 'Hope-Rabbit', lastName: 'patty' }
getMomName(patty)
