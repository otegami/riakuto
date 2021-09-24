const permissions = {
  r: 0b100 as const,
  w: 0b010 as const,
  x: 0b001 as const,
}

type ValueOf<T> = T[keyof T]
type PermsNum = ValueOf<typeof permissions>

const species = ['rabbit', 'bear', 'fox', 'dog'] as const
type Species = typeof species[number]
