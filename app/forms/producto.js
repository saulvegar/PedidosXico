import t from 'tcomb-form-native';
const Form = t.form.Form;
import Select from 'react-native-picker-select';
import * as firebase from 'firebase';

export const Producto = t.struct({
    nombre: t.enums({
        'PT-01-01': 'PT-01-01',
        'PT-02-01': 'PT-02-01'
    }),
    pedidoPz: t.Number,
    degustacionPz: t.maybe(t.Number),
    cambioFisicoPz: t.maybe(t.Number),
});

export const options = {
    fields: {
        nombre: {
            label: 'Elige un producto:',
        },
        pedidoPz: {
            label: 'Producto Pz:'
        },
        degustacionPz: {
            label: 'Degustación Pz:'
        },
        cambioFisicoPz: {
            label: 'Cambio físico Pz:'
        }
    }
}