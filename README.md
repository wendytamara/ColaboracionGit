

### HELLOUUU

# Colaboracion
#wendy tamara
#Jennifer Carmen
#silvia fuentes
#XX
# Git 


- git status me muestra los cambios realizados
- para subir es recomendable usar 
- git add -A

git commit ----

git log -- Muestra el historial de los commits 

git diff --Muestra los cambios realizados en nuestro repositorio local


git checkout commitalquequierasir

crear rama para las versiones
git checkout -b 'nuevarama' --> sin comillas 


eliminar el ultimo commit 
ir al commit anterior
git reset --hard 'commit' --> sin comillas 


con 
git stash vuelve a los cambios del ultimo commit 

git stash list me muestra la lista de cambios de stash

para volver a algun cambio borrado con git stash usar:

 git stash apply stash@{1}


:q! para salir del conflictogit 



para trabajar colaborativamente con pull request:

forkear el repo de la produccion

ver que gits tienes
git remote

y conectarte al repositorio principal

git remote add upstream 'link del repo original' -->sin comillas

comprobar que tengas los dos repos

git remote y te tiene que salir el origin y upstream

- Hacemos 
git fetch upstream

- vemos las ramas locales

- git branch


* Nos traemos la rama master del repo original .

```

git fetch upstream nombre-rama 

```

* Nos traemos la rama master

```
git pull upstream origin master 
```
