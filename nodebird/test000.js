const mat=['닭가슴살','치즈','양파','피클','양상추','리코타치즈','발사믹 소스','토마토','치킨','마살라소스','버터', '마요네즈','계란','감자','불고기', '돼지고기','소고기','빵','통다리',
'햄','통새우','스리라차','베이컨','화이트치즈소스','할라피뇨']
const kaka = '햄이들어간';
const mat1 =[];
for(var j = 0; j <mat.length; j++ ){
    if (kaka.indexOf(mat[j]) != -1){
        mat1.push(mat[j]);
        console.log(mat1);
    }
}
console.log(mat1[0]);
