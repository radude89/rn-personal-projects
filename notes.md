# Core Components

<table>
<tr>
  <th>Component</th>
  <th>Code</th>
  <th>Screenshot</th>
</tr>
<tr>
  <td><code>View</code></td>
  <td>

```html
<View style={{ flex: 1, backgroundColor: "plum" }}>
    <View style={{ width: 200, height: 200, backgroundColor: "green" }}></View>
    <View style={{ width: 200, height: 200, backgroundColor: "blue" }}></View>
</View>
```

  </td>
  <td>
    <img src="images/Simulator Screenshot - iPhone SE (3rd generation) - 2024-03-13 at 06.07.28.png" />
  </td>
</tr>
<tr>
  <td><code>Text</code></td>
  <td>

```html
<Text>
      <Text style={{ color: "white" }}>Hello </Text> World
</Text>
```

  </td>
  <td>
    <img src="images/Simulator Screenshot - iPhone SE (3rd generation) - 2024-03-13 at 06.06.21.png" />
  </td>
</tr>
<tr>
  <td><code>Image</code></td>
  <td>

```html
<Image source={logoImg} style={{ width: 300, height: 300 }} />
<Image
  source={{ uri: "https://picsum.photos/300" }}
  style={{ width: 300, height: 300 }}
/>
```

  </td>
  <td>
    <img src="images/Simulator Screenshot - iPhone SE (3rd generation) - 2024-03-13 at 06.01.37.png" />
  </td>
</tr>
<tr>
  <td><code>ImageBackground</code></td>
  <td>

```html
<ImageBackground source={logoImg} style={{ flex: 1 }}>
  <Text>IMAGE TEXT</Text>
</ImageBackground>
```

  </td>
  <td>
    <img src="images/Simulator Screenshot - iPhone SE (3rd generation) - 2024-03-13 at 05.51.46.png" />
  </td>
</tr>
</table>
