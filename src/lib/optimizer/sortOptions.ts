// This file tracks the mapping between various stat property references between the optimizer / worker / grid / buffer packer
// This sucks - clean up the discrepancies eventually
export const SortOption = {
  ATK: {
    key: 'ATK',
    basicProperty: 'ATK',
    combatProperty: 'ATK',
    basicGridColumn: 'ATK',
    combatGridColumn: 'xATK',
  },
  DEF: {
    key: 'DEF',
    basicProperty: 'DEF',
    combatProperty: 'DEF',
    basicGridColumn: 'DEF',
    combatGridColumn: 'xDEF',
  },
  HP: {
    key: 'HP',
    basicProperty: 'HP',
    combatProperty: 'HP',
    basicGridColumn: 'HP',
    combatGridColumn: 'xHP',
  },
  SPD: {
    key: 'SPD',
    basicProperty: 'SPD',
    combatProperty: 'SPD',
    basicGridColumn: 'SPD',
    combatGridColumn: 'xSPD',
  },
  CR: {
    key: 'CR',
    basicProperty: 'CRIT Rate',
    combatProperty: 'CRIT Rate',
    basicGridColumn: 'CRIT Rate',
    combatGridColumn: 'xCR',
  },
  CD: {
    key: 'CD',
    basicProperty: 'CRIT DMG',
    combatProperty: 'CRIT DMG',
    basicGridColumn: 'CRIT DMG',
    combatGridColumn: 'xCD',
  },
  EHR: {
    key: 'EHR',
    basicProperty: 'Effect Hit Rate',
    combatProperty: 'Effect Hit Rate',
    basicGridColumn: 'Effect Hit Rate',
    combatGridColumn: 'xEHR',
  },
  RES: {
    key: 'RES',
    basicProperty: 'Effect RES',
    combatProperty: 'Effect RES',
    basicGridColumn: 'Effect RES',
    combatGridColumn: 'xRES',
  },
  BE: {
    key: 'BE',
    basicProperty: 'Break Effect',
    combatProperty: 'Break Effect',
    basicGridColumn: 'Break Effect',
    combatGridColumn: 'xBE',
  },
  OHB: {
    key: 'OHB',
    basicProperty: 'Outgoing Healing Boost',
    combatProperty: 'Outgoing Healing Boost',
    basicGridColumn: 'Outgoing Healing Boost',
    combatGridColumn: 'xOHB',
  },
  ERR: {
    key: 'ERR',
    basicProperty: 'Energy Regeneration Rate',
    combatProperty: 'Energy Regeneration Rate',
    basicGridColumn: 'Energy Regeneration Rate',
    combatGridColumn: 'xERR',
  },
  ELEMENTAL_DMG: {
    key: 'ELEMENTAL_DMG',
    basicProperty: 'ELEMENTAL_DMG',
    combatProperty: 'ELEMENTAL_DMG',
    basicGridColumn: 'ED',
    combatGridColumn: 'xELEMENTAL_DMG',
    isComputedRating: true,
  },
  EHP: {
    key: 'EHP',
    basicProperty: 'EHP',
    combatProperty: 'EHP',
    basicGridColumn: 'EHP',
    combatGridColumn: 'EHP',
    isComputedRating: true,
  },
  BASIC: {
    key: 'BASIC',
    basicProperty: 'BASIC_DMG',
    combatProperty: 'BASIC_DMG',
    basicGridColumn: 'BASIC',
    combatGridColumn: 'BASIC',
    isComputedRating: true,
  },
  SKILL: {
    key: 'SKILL',
    basicProperty: 'SKILL_DMG',
    combatProperty: 'SKILL_DMG',
    basicGridColumn: 'SKILL',
    combatGridColumn: 'SKILL',
    isComputedRating: true,
  },
  ULT: {
    key: 'ULT',
    basicProperty: 'ULT_DMG',
    combatProperty: 'ULT_DMG',
    basicGridColumn: 'ULT',
    combatGridColumn: 'ULT',
    isComputedRating: true,
  },
  FUA: {
    key: 'FUA',
    basicProperty: 'FUA_DMG',
    combatProperty: 'FUA_DMG',
    basicGridColumn: 'FUA',
    combatGridColumn: 'FUA',
    isComputedRating: true,
  },
  DOT: {
    key: 'DOT',
    basicProperty: 'DOT_DMG',
    combatProperty: 'DOT_DMG',
    basicGridColumn: 'DOT',
    combatGridColumn: 'DOT',
    isComputedRating: true,
  },
  BREAK: {
    key: 'BREAK',
    basicProperty: 'BREAK_DMG',
    combatProperty: 'BREAK_DMG',
    basicGridColumn: 'BREAK',
    combatGridColumn: 'BREAK',
    isComputedRating: true,
  },
  COMBO: {
    key: 'COMBO',
    basicProperty: 'COMBO_DMG',
    combatProperty: 'COMBO_DMG',
    basicGridColumn: 'COMBO',
    combatGridColumn: 'COMBO',
    isComputedRating: true,
  },
  COMBO_AV: {
    key: 'COMBO_AV',
    basicProperty: 'COMBO_AV',
    combatProperty: 'COMBO_AV',
    basicGridColumn: 'COMBO_AV',
    combatGridColumn: 'COMBO_AV',
    isComputedRating: true,
  },
}
