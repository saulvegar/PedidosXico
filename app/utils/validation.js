import t from 'tcomb-form-native';

export default formValidation = {
    usuario: t.refinement(t.String, (s) => {
        //return /@/.test(s);
        return s.length >= 1;
    }),
    contraseña: t.refinement(t.String, (s) => {
        return s.length >= 6;
    })
};