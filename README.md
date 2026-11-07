# Uma carta para Maeli ❤️

Site estático (HTML, CSS e JavaScript puro), pronto para o GitHub Pages.
Não tem backend, banco de dados nem dependências pagas.

```
maeli/
├── index.html      ← estrutura e TEXTO DA CARTA
├── style.css       ← visual e animações
├── script.js       ← lista de FOTOS, lista de VIDEOS e interações
├── README.md
├── .nojekyll
└── assets/
    ├── images/     ← foto-01.jpg … foto-10.jpg
    ├── videos/     ← video-01.mp4 … (de 3 a 8 vídeos) e capa-01.jpg … (capas)
    └── music/      ← musica.mp3
```

---

## 1. Colocar o texto da carta

Abra o `index.html` e procure por:

```html
<script type="text/plain" id="carta-texto">
[COLE AQUI O TEXTO ORIGINAL DA CARTA]
</script>
```

Apague a linha `[COLE AQUI O TEXTO ORIGINAL DA CARTA]` e cole o texto no lugar, **exatamente como ele é**.

- Não precisa de HTML: basta colar o texto.
- Deixe **uma linha em branco** entre um parágrafo e outro.
- O site exibe o texto sem alterar nenhuma palavra, acento ou pontuação.

Enquanto o texto não for colado, a carta mostra esse aviso entre colchetes, então não publique antes de colar.

## 2. Adicionar as fotografias

1. Coloque as fotos em `assets/images/` com os nomes `foto-01.jpg`, `foto-02.jpg`, … `foto-10.jpg`.
2. Em `script.js`, ajuste a lista `FOTOS` no topo do arquivo. Cada foto tem:

| Campo       | O que é |
|-------------|---------|
| `arquivo`   | nome do arquivo em `assets/images/` |
| `categoria` | `"juntos"` (carinho, passeios) ou `"fe"` (terno, igreja, cultos) — `"fe"` ganha uma pequena cruz dourada |
| `formato`   | `"vertical"` (foto de celular inteira), `"retrato"`, `"paisagem"` ou `"quadrado"` — define o recorte no álbum (a versão ampliada sempre mostra a foto inteira) |
| `legenda`   | a frase que aparece junto da foto |
| `descricao` | texto curto para acessibilidade |

- Use de 6 a 10 fotos; apague da lista as que não forem usadas.
- A ordem da lista é a ordem do álbum.
- Se um arquivo ainda não existir, aparece um "espaço reservado" no lugar.
- **As legendas que já estão na lista são sugestões.** As fotos ainda não foram vistas, então confira se cada legenda combina com a foto real (por exemplo, use as legendas de fé só nas fotos de igreja/terno) e troque o que for preciso.
- Para fotos `.jpeg`/`.png`, basta escrever o nome correto em `arquivo`.
- Dica: fotos com até ~1600 px no lado maior carregam rápido no celular.

## 3. Adicionar os vídeos

1. Coloque os vídeos MP4 em `assets/videos/` (`video-01.mp4`, `video-02.mp4`, …).
2. Em `script.js`, ajuste a lista `VIDEOS` (logo abaixo da lista de fotos):

```js
const VIDEOS = [
  {
    src: "assets/videos/video-01.mp4",
    title: "Nós dois",
    caption: "Às vezes, tudo o que eu queria era poder voltar por alguns segundos e viver novamente um momento como esse.",
    description: "",                     // opcional
    poster: "assets/videos/capa-01.jpg"  // opcional: imagem de capa
  }
];
```

- Use de 3 a 8 vídeos; apague da lista os que não forem usados.
- As legendas que estão na lista são sugestões: confira se cada uma combina com o que aparece no vídeo.
- Vídeos verticais (de celular) e horizontais mantêm a proporção original.
- Os vídeos só começam a carregar quando a pessoa se aproxima da seção e nunca tocam sozinhos.
- Quando um vídeo começa, qualquer outro vídeo e a música de fundo são pausados.
- **Tamanho:** o GitHub não aceita arquivos acima de 100 MB, e vídeos pesados demoram no celular. Tente deixar cada vídeo com menos de ~25 MB (720p já fica ótimo). Com o [HandBrake](https://handbrake.fr/) (gratuito), use o preset "Fast 720p30". Pelo terminal, com ffmpeg:

```bash
ffmpeg -i original.mov -vf "scale=-2:720" -c:v libx264 -crf 26 -preset slow -c:a aac -b:a 128k -movflags +faststart assets/videos/video-01.mp4
```

## 4. Música (opcional)

Coloque o arquivo em `assets/music/musica.mp3`. A música só toca quando o botão "Música" (canto inferior direito) é tocado — os navegadores não permitem tocar sozinha. Se não houver arquivo, o botão mostra "Sem música".

## 5. Ver no computador antes de publicar

Abra o `index.html` no navegador, ou, para simular o site publicado:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## 6. Publicar no GitHub Pages (gratuito)

1. Envie todos os arquivos (incluindo a pasta `assets/`) para um repositório no GitHub.
2. No repositório, vá em **Settings → Pages**.
3. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
4. Selecione a branch (por exemplo `main`) e a pasta **`/ (root)`**, e clique em **Save**.
5. Em um ou dois minutos o endereço aparece no topo da página, no formato
   `https://SEU-USUARIO.github.io/maeli/`.

Observações:

- Todos os caminhos são relativos, então o site funciona em qualquer endereço do GitHub Pages.
- Os nomes de arquivos diferenciam maiúsculas de minúsculas no GitHub Pages (`Foto-01.JPG` ≠ `foto-01.jpg`).
- Em repositórios públicos, qualquer pessoa com o link pode ver o site. O site tem `noindex` para não aparecer em buscadores, mas fotos e vídeos ficam visíveis no repositório.

## Recursos incluídos

- Tela de entrada com envelope que se abre e revela a carta.
- Carta com parágrafos que surgem como se estivessem sendo escritos.
- Álbum de fotografias com tamanhos alternados, legendas, zoom ao passar o mouse e visualização ampliada (setas, teclado, deslizar no celular, botão de fechar).
- Seção "Momentos que ficaram para sempre..." com vídeos em miniaturas cinematográficas, reprodução no próprio site, controles, tela cheia e um vídeo por vez.
- Frase especial em fundo vinho com coração dourado.
- Encerramento com coração pulsando.
- Corações flutuando discretamente, botão de música, rolagem suave.
- Respeita a preferência de "reduzir movimento" do aparelho.
- Pensado primeiro para celular (Android e iPhone), funcionando também em tablets e computadores.
