import { Selector } from 'testcafe';

fixture `My fixture`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Text typing basics', async t => {
    await t
        .typeText('#developer-name', 'Peter')
        .wait(1000)
        .typeText('#developer-name', 'Paker', { replace: true })
        .wait(1000)
        .typeText('#developer-name', 'r', { caretPos: 2 })
        .wait(1000)
        .expect(Selector('#developer-name').value).eql('Parker');
});

test('Click check boxes and then verify their state', async t => {
    await t
        .click('input[id=remote-testing]')
        .wait(1000)
        .expect(Selector('input[id=remote-testing]').checked).ok()
        .click('input[id=reusing-js-code]')
        .wait(1000)
        .expect(Selector('input[id=reusing-js-code]').checked).ok()
        .click('input[id=continuous-integration-embedding]')
        .wait(1000)
        .expect(Selector('input[id=continuous-integration-embedding]').checked).ok();
});