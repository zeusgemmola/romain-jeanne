import React, { useState, useEffect } from "react";
import CurrencyList from "../components/CurrencyList";
import {
  assertNumber,
  stripLeadingZeros,
  commaToDecimalPoint
} from "../utils/utils";
import Spinner from "../components/Spinner/Spinner";

const Convertisseur = () => {
  const [inputForm, setInputForm] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [resultValue, setResultValue] = useState(0);

  // Fix Montant field name alignment
  useEffect(() => {
    M.updateTextFields();
  }, []);

  useEffect(() => {
    // Etant donné que l'API (https://react-starter-api.vercel.app/api/convert/:base_currency) ne marchait pas (erreur 500 serveur)
    // J'ai utilisé l'API CurrencyAPI (anciennement freecurrencyapi.net).
    // L'API CurrencyAPI ne permet pas de /CONVERT dans sa version gratuite
    const apiKey = "4AsXwGD9283QrvgpWWgFwhvbZTcpu0AmckhxhMA9";
    const setConversionResult = async (input, from, to) => {
      setResultValue(Spinner);

      // Test timeout to display spinner
      //await new Promise((r) => setTimeout(r, 2000));

      const rate = await fetch(
        `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${from}&currencies=${to}`
      )
        .then((response) => response.json())
        .then((response) => response["data"][to]["value"]);

      setResultValue(input * rate);
    };

    const parsedInput = stripLeadingZeros(commaToDecimalPoint(inputForm));

    // If the parsed input is a valid number
    if (assertNumber(parsedInput) && parsedInput !== "0") {
      // If the From currency and To currency are not the same
      fromCurrency !== toCurrency
        ? // Convert and display the conversion result
          setConversionResult(parsedInput, fromCurrency, toCurrency)
        : // Otherwise just show the input value, = conversion rate of 1
          setResultValue(parsedInput);
    } else setResultValue(0);
  }, [inputForm, fromCurrency, toCurrency]);

  return (
    <main>
      <div className="container">
        <div className="row">
          <h3>Convertisseur</h3>
          <div className="col s8">
            <div className="row">
              <CurrencyList
                label="From"
                onChange={(from) => setFromCurrency(from.target.value)}
              />
              <CurrencyList
                label="To"
                onChange={(to) => setToCurrency(to.target.value)}
              />
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="amount"
                  type="text"
                  className={
                    assertNumber(commaToDecimalPoint(inputForm))
                      ? "valid"
                      : "invalid"
                  }
                  value={inputForm}
                  onChange={(value) => setInputForm(value.target.value)}
                />
                <span
                  className="helper-text"
                  data-error="Erreur"
                  data-success="Valide"
                ></span>
                <label htmlFor="amount">Montant</label>
              </div>
              <div
                className="input-field col 
              s12"
              >
                <h5>Résultat : {resultValue}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Convertisseur;
