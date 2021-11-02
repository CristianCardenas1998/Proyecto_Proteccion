function cambiarImagen(){
    return true
}

test('cambiarImagen retorna true para input "true"', () => {
    expect(cambiarImagen('true')).toBe(true);
});