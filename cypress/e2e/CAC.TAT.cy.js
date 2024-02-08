
/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(function(){
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    
    it("preenche os campos obrigatórios e envia o formulário", function() {
        const Longtext = 'Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans? Not only are they in the field egg group, which is mostly comprised of mammals, Vaporeon are an average of 3”03’ tall and 63.9 pounds, this means they’re large enough to be able handle human dicks, and with their impressive Base Stats for HP and access to Acid Armor, you can be rough with one. Due to their mostly water based biology, there’s no doubt in my mind that an aroused Vaporeon would be incredibly wet, so wet that you could easily have sex with one for hours without getting sore. They can also learn the moves Attract, Baby-Doll Eyes, Captivate, Charm, and Tail Whip, along with not having fur to hide nipples, so it’d be incredibly easy for one to get you in the mood. With their abilities Water Absorb and Hydration, they can easily recover from fatigue with enough water. No other Pokémon comes close to this level of compatibility. Also, fun fact, if you pull out enough, you can make your Vaporeon turn white. Vaporeon is literally built for human dick. Ungodly defense stat+high HP pool+Acid Armor means it can take cock all day, all shapes and sizes and still come for more'
        cy.get('[id="firstName"]').type('Geraldo', {delay: 0})
        cy.get('[id="lastName"]').type('Sampaio de Malta', {delay: 0})
        cy.get('[id="email"]').type('geraldomalta@gmail.com', {delay: 0})
        cy.get('[id="open-text-area"]').type(Longtext, {delay: 0})
        cy.get('button[type="submit"]').click()
        cy.contains('Mensagem enviada com sucesso.').should('be.visible')
    })

    it('Email incorreto e mensagem de erro', function(){
        cy.get('[id="firstName"]').type('Geraldo')
        cy.get('[id="lastName"]').type('Sampaio de Malta')
        cy.get('[id="email"]').type('geraldomaltgmail.com')
        cy.get('[id="open-text-area"]').type('geraldomalt@gmail.com')
        cy.get('[type="submit"]').click()
        cy.contains('Valide os campos obrigatórios!').should('be.visible')


    })

    it("Campo numero aceita apenas numeros", function(){
        cy.get('[id="phone"]')
        .type('aoba', {delay: 0})
        .should('have.value', '')
    })

    it("exibe mensagem de erro quando o telefone se torna obrigatório\
     mas não é preenchido antes do envio do formulário", function(){
        cy.get('[id="firstName"]').type('Geraldo', {delay: 0})
        cy.get('[id="lastName"]').type('Sampaio de Malta', {delay: 0})
        cy.get('[id="email"]').type('geraldomalta@gmail.com', {delay: 0})
        cy.get('[id= "phone-checkbox"]').check()
        cy.get('[id="open-text-area"]').type('Eu preciso de um desfoque peniano', {delay: 0})
        cy.get('[type="submit"]').click()
        cy.contains('Valide os campos obrigatórios!').should('be.visible')


    })

    it(".type e .clear", function(){
        cy.get('[id="firstName"]')
        .type('Geraldo', {delay: 0})
        .should('have.value', 'Geraldo')
        .clear()
        .should('have.value', '' )
        
        cy.get('[id="lastName"]')
        .type('Sampaio de Malta', {delay: 0})
        .should('have.value', 'Sampaio de Malta')
        .clear()
        .should('have.value', '' )
        
        cy.get('[id="email"]')
        .type('geraldomalta@gmail.com', {delay: 0})
        .should('have.value', 'geraldomalta@gmail.com')
        .clear()
        .should('have.value', '' )
        
        cy.get('[id="phone"]')
        .type('123', {delay: 0})
        .should('have.value', '123')
        .clear()
        .should('have.value', '' )
        
        cy.get('[id="open-text-area"]')
        .type('Eu preciso de um desfoque peniano', {delay: 0})
        .should('have.value', 'Eu preciso de um desfoque peniano')
        .clear()
        .should('have.value', '' )
        
    })

    it("mensagem de erro", function(){
        cy.get('[type="submit"]').click()
        cy.contains('Valide os campos obrigatórios!').should('be.visible')

        
    })

    /* it('enviar formulário com Customs commands', function(){
        var ajuda = "To be fair, you have to have a very high IQ to understand Rick and Morty. The humor is extremely subtle, and without a solid grasp of theoretical physics most of the jokes will go over a typical viewer's head. There's also Rick's nihilistic outlook, which is deftly woven into his characterisation - his personal philosophy draws heavily from Narodnaya Volya literature, for instance. The fans understand this stuff; they have the intellectual capacity to truly appreciate the depths of these jokes, to realize that they're not just funny- they say something deep about LIFE. As a consequence people who dislike Rick and Morty truly ARE idiots- of course they wouldn't appreciate, for instance, the humour in Rick's existencial catchphrase 'Wubba Lubba Dub Dub,' which itself is a cryptic reference to Turgenev's Russian epic Fathers and Sons I'm smirking right now just imagining one of those addlepated simpletons scratching their heads in confusion as Dan Harmon's genius unfolds itself on their television screens. What fools... how I pity them. 😂 And yes by the way, I DO have a Rick and Morty tattoo. And no, you cannot see it. It's for the ladies' eyes only- And even they have to demonstrate that they're within 5 IQ points of my own (preferably lower) beforehand."
        cy.fillMandatoryFieldsandSubmit('Gerson', 'Aloha', 'aaaaa@gmail.com', 'Teste')

        cy.contains('Mensagem enviada com sucesso.').should('be.visible')
     }) */

    it('cy.contain', function(){
        cy.contains('Enviar').click()

        cy.contains('Valide os campos obrigatórios!').should('be.visible')


     })
    
    it('seleciona um produto (YouTube) por seu texto', function(){
        cy.get('#product').select('YouTube').should('have.value', 'youtube')
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function(){
        cy.get('#product').select('mentoria').should('have.value', 'mentoria')
    })

    it('seleciona um produto (Blog) por seu índice', function(){
        cy.get('#product').select(1).should('have.value', 'blog')
    })

    it('Selecionar opção aleatória', function(){
        var random = Math.floor((Math.random() * 10))
       
         while (random > 4 || random <= 0){
            random = Math.floor(Math.random() * 10);
        } 
        
        cy.get('#product').select(random)
       
        
    })

    it('marca o tipo de atendimento "Feedback"', function(){
        cy.get('[name="atendimento-tat"]').check().should('be.checked')
    })

    it('marca cada tipo de atendimento', function(){
        cy.get('[value="ajuda"]').check().should('be.checked')
        cy.get('[value="elogio"]').check().should('be.checked')
        cy.get('[value="feedback"]').check().should('be.checked')
    })

    it('wrap e each', function(){
        cy.get('input[type = "radio"]')
         .should('have.length', 3)
         .each(function($radio)  {
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
    })

    it('wrap e each', function(){
        cy.get('input[type = "text"]')
         .should('have.length', 2)
         .each(function($text)  {
            cy.wrap($text).type('Hallelujah')
            cy.wrap($text).should('have.value', 'Hallelujah')
            cy.wrap($text).clear()
            cy.wrap($text).should('have.value', '')
        })
    })

    it('marca ambos checkboxes, depois desmarca o último', function(){
        cy.get('input[type="checkbox"]')
        .check()
        .should('be.checked')
        .last()
        .uncheck()
        .should('not.be.checked')
        
    })

    it('informações sobre o input', function(){
        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('cypress/fixtures/example.json')
        .should(function($input) {
            console.log($input)

            //Tem que entrar no console (não elementos),
            //Ir até o objeto file
        })
    })

    it('seleciona um arquivo da pasta fixtures', function(){
        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('cypress/fixtures/example.json')
        .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('seleciona um arquivo da simualndo drag and drop', function(){
        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
        .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('seleciona um arquivo da simualndo drag and drop', function(){
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]')
           .selectFile('@sampleFile')   
           .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })
     
    })

    it('verificar que o link tenha o atributo _blank', function(){
        cy.get('#privacy a')
        .should('have.attr', 'target', '_blank')
        
    })

    it('abrir link de outra aba removendo o atributo target', function(){
        cy.get('#privacy a')
          .invoke('removeAttr', 'target')
          .click()
        cy.contains('CAC TAT - Política de privacidade').should('be.visible')
    })


})