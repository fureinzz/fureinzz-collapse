suite('<fureinzz-collapse>', () => {
    let component

    setup(() => component = document.querySelector('fureinzz-collapse'))

    test('default `opened` attribute', () => {
        assert.equal(component.opened, false)
    })

    test('default `noAnimation` attribute', () => {
        assert.equal(component.noAnimation, false)
    })

    test('default `horizontal` attribute', () => {
        assert.equal(component.horizontal, false)
    })

    test('default opened maxHeight', () => {
        assert.equal(component.style.maxHeight, '0px')
    })

    test('default display value', () => {
        assert.equal(component.style.display, 'none')
    })

    test('sdads', done => {
        component.addEventListener('transitionend', () => {
            if(component.opened) {
                assert.equal(component.opened, true)
                assert.equal(component.style.maxHeight, '')
                assert.equal(component.style.display, '')

                done()
            } else {
                assert.equal(component.opened, false)
                assert.equal(component.style.maxHeight, '0px')
                assert.equal(component.style.display, 'none')
                

                done()
            }
        })

        component.opened = true
    })    
})