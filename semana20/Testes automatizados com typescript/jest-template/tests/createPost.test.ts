import { BaseDatabase } from "../src/data/BaseDatabase"
import { PostDatabase } from "../src/data/PostDatabase"
import { POST_TYPE } from "../src/model/Post"
import dotenv from 'dotenv';
dotenv.config();

describe("Testes assincronos", () => {
    const post = {
        postId: "123",
        photoUrl: "lalalala.img",
        description: "Post teste",
        createdAt: "2020-09-28",
        type: POST_TYPE.NORMAL,
        userId: "9b908626-7138-4fd7-a0fb-017149dc1c8b"
    }
    test("teste de criar posts Labook", async () => {
        const postDatabase = new PostDatabase()
        await postDatabase.createPost(post.postId, post.photoUrl, post.description, post.createdAt, post.type, post.userId)

        const testPost = await postDatabase.getPostById(post.postId)

        expect(testPost).not.toBe(undefined)
    })

    test("teste para pegar erro de chave duplicada", async () => {
        try {
            const postDatabase = new PostDatabase()
            await postDatabase.createPost(post.postId, post.photoUrl, post.description, post.createdAt, post.type, post.userId)
        } catch (error) {
            expect(error).not.toBe(undefined)
        }
    })

    afterAll(async() => {
        const postDatabase = new PostDatabase()
        await postDatabase.deletePostById(post.postId)
        await BaseDatabase.destroyConnection()
    })
})