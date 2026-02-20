function calculateSalary(basic, bonus, leaves) {
  const leaveDeduction = leaves * 500;
  return basic + bonus - leaveDeduction;
}

function calculateBonus(basic) {
  return basic * 0.1;
}

function calculateLeaveDeduction(leaves) {
  return leaves * 500;
}

module.exports = {
  calculateSalary,
  calculateBonus,
  calculateLeaveDeduction
};
