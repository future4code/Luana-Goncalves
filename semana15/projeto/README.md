Estrutura de Dados 
Contas:
- nome 
- CPF (único)
- data de nascimento (idade > 18)
- saldo (começa zerado)
- extrato (array de transações)
    - valor
    - data
    - descrição

Funcionalidades
Criar conta 
    - Informar nome, CPF e data de nascimento

Pegar saldo 
    - Passando nome e CPF

Adicionar saldo
    - Passando nome, CPF e valor

Pagar conta
    - Passando valor,descrição e data de pagamento.
    - Caso ele não informe a data, considerar o pagamento no mesmo dia.
    - Não pode haver agendamento para data passada.
    - Não pode haver pagamento sem que haja saldo suficiente

Tranferência interna
    - Informar nome, cpf, nome do destinatário e valor.
    - Não podem ser agendadas.
    - Devem respeitaro saldo do usuário remetente. 

Requisitos mínimos
    - Criar conta,
    - Pegar contas e 
    - Adicionar validação de idade.

Etapas de desenvolvimento 
    1. Crie um tipo para representar uma conta para o usuário

    2. Crie um array que armazene usuários na aplicação. Caso queira, pode iniciar essee array com valores pré-definidos.

    3. Crie mais um tipo: para representar as transações que serão salvas no extrato

    4. Dentro da definição do usuário, crie um array que armazene as transaçõesde um cliente.

    5. Crie um endpoint que utilize o método POST da entidade users que será responsável por cadastras um usuário em um arrays. Neste momento não se preocupe com as validaçoes descristas nas funcionalidades.

    6. Crie um método GET na entidade users que rerá responsável por pegar todos os usuários existentes no array de usuários 

    7.Adicione, uma validação no item 1(criar conta): o usuário deve possuir mais do que 18 anos para conseguir se cadastrar. Caso não possua, exiba uma mensagem de erro.
    


