class clothingItem {
  id: string;
  name: string;
  type: string;
  color: string; //hex color code
  attributes: {[attribute: string]: number;} = {}; //Key: attribute ; Value: int 0-10 that represents the contribution of the item towards the attribute
  matching_grade: {[id: string]: number;} = {}; //Key: id of item to compare ; Value: int 0-10 that represents how well the two items match
  user_grade: number; //0 to 5 stars

  constructor(item_id: string, item_name: string, item_type: string, item_attributes: {}) {
    this.id = item_id;
    this.name = item_name;
    this.type = item_type;
    this.attributes = item_attributes;
  }
  get_id() {
    return this.id;
  }
  get_name() {
    return this.name;
  }
  get_type() {
    return this.type;
  }
  get_color() {
    return this.color;
  }
  get_attributes() {
    return this.attributes;
  }
  get_matching_grade() {
    return this.matching_grade;
  }
  get_user_grade() {
    return this.user_grade;
  }
  edit_attributes(new_attributes: {}) {
    this.attributes = new_attributes;
  }
  edit_matching_grade(new_matching_grade: {}) {
    this.matching_grade = new_matching_grade;
  }
  edit_user_grade(new_user_grade: number) {
    this.user_grade = new_user_grade;
  }

}

class clothingCombination {
  id: string;
  attributes: {[attribute: string]: number;} = {}; //Key: attribute ; Value: int 0-10 that represents the rate of the attribute within the clothingCombination
  items: {[item_type: string]: string;} = {}; //Key: item type ; Value: item id
  algorithm_grade: number;
  user_grade: number; //0 to 5 stars

  constructor(comb_id: string, comb_attributes: {}, comb_items: {}, comb_algorithm_grade: number) {
    this.id = comb_id;
    this.attributes = comb_attributes;
    this.items = comb_items;
    this.algorithm_grade = comb_algorithm_grade;
  }

  get_id() {
    return this.id;
  }

  get_attributes() {
    return this.attributes;
  }

  get_items() {
    return this.items;
  }

  get_algorithm_grade() {
    return this.algorithm_grade;
  }

  get_user_grade() {
    return this.user_grade;
  }

  edit_attributes(new_attributes: {}) {
    this.attributes = new_attributes;
  }

  edit_items(new_items: {}) {
    this.items = new_items;
  }

  edit_user_grade(new_user_grade: number) {
    this.user_grade = new_user_grade;
  }

}

function order_clothing_combinations(combinations: Array<clothingCombination>) {
  return combinations.sort(function(comb_a,comb_b) {
    if (comb_a.get_algorithm_grade() < comb_b.get_algorithm_grade()) {
      return -1;
    }
    if (comb_a.get_algorithm_grade() > comb_b.get_algorithm_grade()) {
      return 1;
    }
    return 0;
  })
}
