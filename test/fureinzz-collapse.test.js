import 'wct-browser-legacy/browser'

suite('<fureinzz-collapse>', () => {
    let component

    setup(() => component = document.querySelector('fureinzz-collapse'))

    test('`opened` attribute', () => {
        assert.equal(component.opened, false)
    })

    test('`noAnimation` attribute', () => {
        assert.equal(component.noAnimation, false)
    })

    test('`horizontal` attribute', () => {
        assert.equal(component.horizontal, false)
    })

    test('default opened maxHeight', () => {
        assert.equal(component.style.maxHeight, '0px')
    })
})