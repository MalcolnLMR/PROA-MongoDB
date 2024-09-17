# Atividade Oscars

1) Quantas vezes Natalie Portman foi indicada ao Oscar?</br>

```
> db.oscar.countDocuments({entity: /Natalie Portman/i})
< 3
```
<hr>
2) Quantos Oscars Natalie Portman ganhou?</br>

```
> db.oscar.countDocuments({entity: /Natalie Portman/i, winner: true})
< 1
```
<hr>
3) Amy Adams já ganhou algum Oscar?</br>

```
> db.oscar.countDocuments({entity: /Amy Adams/i, winner: true})
< 0
```

<hr>
4) A série de filmes Toy Story ganhou um Oscar em quais anos?</br>
Em 1995 e 2010

```
> db.oscar.find({entity: /Toy Story/i, winner: true})
< {
  _id: ObjectId('66e99cd56c159b91fbcbdc59'),
  category: 'SPECIAL ACHIEVEMENT AWARD',
  entity: 'To John Lasseter, for his inspired leadership of the Pixar Toy Story team, resulting in the first feature-length computer-animated film.',
  winner: true,
  year: 1995
  }

  {
  _id: ObjectId('66e99cd66c159b91fbcbe3b2'),
  category: 'ANIMATED FEATURE FILM',
  entity: 'Toy Story 3',
  winner: true,
  year: 2010
  }

  {
  _id: ObjectId('66e99cd66c159b91fbcbe3e6'),
  category: 'MUSIC (Original Song)',
  entity: 'Toy Story 3',
  winner: true,
  year: 2010
  }
```

<hr>
5) A partir de que ano que a categoria "Actress" deixa de existir?</br> 

<hr>
6) O primeiro Oscar para melhor Atriz foi para quem? Em que ano?</br>

<hr>
7) Na campo "Vencedor", altere todos os valores com "Sim" para 1 e todos os valores "Não" para 0.</br>

<hr>
8) Em qual edição do Oscar "Crash" concorreu ao Oscar?</br>

<hr>
9) Bom... dê um Oscar para um filme que merece muito, mas não ganhou.</br>

<hr>
10) O filme Central do Brasil aparece no Oscar?</br>

<hr>
11) Inclua no banco 3 filmes que nunca foram nem nomeados ao Oscar, mas que merecem ser. </br>

<hr>
12) Pensando no ano em que você nasceu: Qual foi o Oscar de melhor filme, Melhor Atriz e Melhor Diretor?</br>