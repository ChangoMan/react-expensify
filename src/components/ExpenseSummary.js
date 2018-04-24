import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';

export const ExpenseSummary = (props) => {
  const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses'
  return (
    <div>
      <h3>Viewing {props.expenseCount} {expenseWord} totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: totalExpenses(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
