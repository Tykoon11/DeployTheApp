import React from "react";

function CurrencyRow({currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount}) {
  return (
    <div id="currencyRow">

      <input type="number" value = {amount} onChange={onChangeAmount}/>
      <select value={selectedCurrency} onChange={onChangeCurrency} >
        {currencyOptions.map((i)  => (
            <option key={i} value={i}>{i}</option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyRow;
