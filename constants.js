(function (root) {
  const DendroHack = root.DendroHack = (root.DendroHack || {});

  const PRETTY_OK_TREE = {
    MAX_LEAF_AGE: 3,
    NEW_BRANCH_WIDTH: 2,
    NEW_BRANCH_LENGTH: 8,
    NEW_LEAF_WIDTH: 1,
    NEW_LEAF_LENGTH: 5,
    BRANCH_WIDTH_INCREMENT: 3,
    BRANCH_LENGTH_INCREMENT: 2,
    MATURE_BRANCH_WIDTH: 10,
    BRANCH_LIMIT: 3,
    LEAF_LIMIT: 2,
    LEAF_ENERGY: 1,
  };

  const THORNY = {
    MAX_LEAF_AGE: 3,
    NEW_BRANCH_WIDTH: 2,
    NEW_BRANCH_LENGTH: 25,
    NEW_LEAF_WIDTH: 1,
    NEW_LEAF_LENGTH: 5,
    BRANCH_WIDTH_INCREMENT: 4,
    BRANCH_LENGTH_INCREMENT: 0,
    MATURE_BRANCH_WIDTH: 8,
    BRANCH_LIMIT: 2,
    LEAF_LIMIT: 1,
    LEAF_ENERGY: 1,
  };

  const A_DOPE_TREE = {
    MAX_LEAF_AGE: 3,
    NEW_BRANCH_WIDTH: 2,
    NEW_BRANCH_LENGTH: 50,
    NEW_LEAF_WIDTH: 1,
    NEW_LEAF_LENGTH: 20,
    BRANCH_WIDTH_INCREMENT: 1,
    BRANCH_LENGTH_INCREMENT: 0,
    MATURE_BRANCH_WIDTH: 8,
    BRANCH_LIMIT: 2,
    LEAF_LIMIT: 3,
    LEAF_ENERGY: 1,
  };

  const CURRENT = {
    MAX_LEAF_AGE: 4,
    NEW_BRANCH_WIDTH: 2,
    NEW_BRANCH_LENGTH: 25,
    NEW_LEAF_WIDTH: 1,
    NEW_LEAF_LENGTH: 15,
    BRANCH_WIDTH_INCREMENT: 1,
    BRANCH_LENGTH_INCREMENT: 0.1,
    MATURE_BRANCH_WIDTH: 20,
    BRANCH_LIMIT: 2,
    LEAF_LIMIT: 1,
    LEAF_ENERGY: 5,
  };

  DendroHack.Constants = CURRENT;

  return root;
})(this);
