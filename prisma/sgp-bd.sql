PGDMP     #                    {            sgp-db    15.2    15.2 N    U           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            V           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            W           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            X           1262    26310    sgp-db    DATABASE        CREATE DATABASE "sgp-db" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE "sgp-db";
                postgres    false                        2615    27624    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false            Y           0    0    SCHEMA public    COMMENT         COMMENT ON SCHEMA public IS '';
                   postgres    false    5            Z           0    0    SCHEMA public    ACL     +   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
                   postgres    false    5            �            1259    27757    Arquivo    TABLE     v   CREATE TABLE public."Arquivo" (
    id integer NOT NULL,
    path text NOT NULL,
    "bemMovelId" integer NOT NULL
);
    DROP TABLE public."Arquivo";
       public         heap    postgres    false    5            �            1259    27756    Arquivo_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Arquivo_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Arquivo_id_seq";
       public          postgres    false    230    5            [           0    0    Arquivo_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Arquivo_id_seq" OWNED BY public."Arquivo".id;
          public          postgres    false    229            �            1259    27682    BemMovel    TABLE     �   CREATE TABLE public."BemMovel" (
    id integer NOT NULL,
    nome text NOT NULL,
    descricao text,
    valor double precision,
    "orgaoId" integer NOT NULL,
    "ingressoId" integer,
    "setorId" integer NOT NULL
);
    DROP TABLE public."BemMovel";
       public         heap    postgres    false    5            �            1259    27681    BemMovel_id_seq    SEQUENCE     �   CREATE SEQUENCE public."BemMovel_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."BemMovel_id_seq";
       public          postgres    false    226    5            \           0    0    BemMovel_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."BemMovel_id_seq" OWNED BY public."BemMovel".id;
          public          postgres    false    225            �            1259    27691    Ingresso    TABLE     ~   CREATE TABLE public."Ingresso" (
    id integer NOT NULL,
    "tipoIngresso" text NOT NULL,
    "orgaoId" integer NOT NULL
);
    DROP TABLE public."Ingresso";
       public         heap    postgres    false    5            �            1259    27690    Ingresso_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Ingresso_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Ingresso_id_seq";
       public          postgres    false    228    5            ]           0    0    Ingresso_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Ingresso_id_seq" OWNED BY public."Ingresso".id;
          public          postgres    false    227            �            1259    27673    Orgao    TABLE     z   CREATE TABLE public."Orgao" (
    id integer NOT NULL,
    nome text NOT NULL,
    "unidadeGestoraId" integer NOT NULL
);
    DROP TABLE public."Orgao";
       public         heap    postgres    false    5            �            1259    27672    Orgao_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Orgao_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Orgao_id_seq";
       public          postgres    false    5    224            ^           0    0    Orgao_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Orgao_id_seq" OWNED BY public."Orgao".id;
          public          postgres    false    223            �            1259    27637    Setor    TABLE     s   CREATE TABLE public."Setor" (
    id integer NOT NULL,
    nome text NOT NULL,
    "unidadeId" integer NOT NULL
);
    DROP TABLE public."Setor";
       public         heap    postgres    false    5            �            1259    27636    Setor_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Setor_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Setor_id_seq";
       public          postgres    false    216    5            _           0    0    Setor_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Setor_id_seq" OWNED BY public."Setor".id;
          public          postgres    false    215            �            1259    27655    UnidadeAdministrativa    TABLE     �   CREATE TABLE public."UnidadeAdministrativa" (
    id integer NOT NULL,
    nome text NOT NULL,
    "orgaoId" integer NOT NULL
);
 +   DROP TABLE public."UnidadeAdministrativa";
       public         heap    postgres    false    5            �            1259    27654    UnidadeAdministrativa_id_seq    SEQUENCE     �   CREATE SEQUENCE public."UnidadeAdministrativa_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."UnidadeAdministrativa_id_seq";
       public          postgres    false    220    5            `           0    0    UnidadeAdministrativa_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."UnidadeAdministrativa_id_seq" OWNED BY public."UnidadeAdministrativa".id;
          public          postgres    false    219            �            1259    27664    UnidadeGestora    TABLE     Z   CREATE TABLE public."UnidadeGestora" (
    id integer NOT NULL,
    nome text NOT NULL
);
 $   DROP TABLE public."UnidadeGestora";
       public         heap    postgres    false    5            �            1259    27663    UnidadeGestora_id_seq    SEQUENCE     �   CREATE SEQUENCE public."UnidadeGestora_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."UnidadeGestora_id_seq";
       public          postgres    false    222    5            a           0    0    UnidadeGestora_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."UnidadeGestora_id_seq" OWNED BY public."UnidadeGestora".id;
          public          postgres    false    221            �            1259    27646    Usuario    TABLE     �   CREATE TABLE public."Usuario" (
    id integer NOT NULL,
    nome text NOT NULL,
    email text NOT NULL,
    senha text NOT NULL,
    cpf text NOT NULL,
    "setorId" integer NOT NULL,
    "orgaoId" integer NOT NULL
);
    DROP TABLE public."Usuario";
       public         heap    postgres    false    5            �            1259    27645    Usuario_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Usuario_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Usuario_id_seq";
       public          postgres    false    5    218            b           0    0    Usuario_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Usuario_id_seq" OWNED BY public."Usuario".id;
          public          postgres    false    217            �            1259    27625    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false    5            �           2604    27760 
   Arquivo id    DEFAULT     l   ALTER TABLE ONLY public."Arquivo" ALTER COLUMN id SET DEFAULT nextval('public."Arquivo_id_seq"'::regclass);
 ;   ALTER TABLE public."Arquivo" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    229    230            �           2604    27685    BemMovel id    DEFAULT     n   ALTER TABLE ONLY public."BemMovel" ALTER COLUMN id SET DEFAULT nextval('public."BemMovel_id_seq"'::regclass);
 <   ALTER TABLE public."BemMovel" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            �           2604    27694    Ingresso id    DEFAULT     n   ALTER TABLE ONLY public."Ingresso" ALTER COLUMN id SET DEFAULT nextval('public."Ingresso_id_seq"'::regclass);
 <   ALTER TABLE public."Ingresso" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    227    228            �           2604    27676    Orgao id    DEFAULT     h   ALTER TABLE ONLY public."Orgao" ALTER COLUMN id SET DEFAULT nextval('public."Orgao_id_seq"'::regclass);
 9   ALTER TABLE public."Orgao" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    224    224            �           2604    27640    Setor id    DEFAULT     h   ALTER TABLE ONLY public."Setor" ALTER COLUMN id SET DEFAULT nextval('public."Setor_id_seq"'::regclass);
 9   ALTER TABLE public."Setor" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �           2604    27658    UnidadeAdministrativa id    DEFAULT     �   ALTER TABLE ONLY public."UnidadeAdministrativa" ALTER COLUMN id SET DEFAULT nextval('public."UnidadeAdministrativa_id_seq"'::regclass);
 I   ALTER TABLE public."UnidadeAdministrativa" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            �           2604    27667    UnidadeGestora id    DEFAULT     z   ALTER TABLE ONLY public."UnidadeGestora" ALTER COLUMN id SET DEFAULT nextval('public."UnidadeGestora_id_seq"'::regclass);
 B   ALTER TABLE public."UnidadeGestora" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            �           2604    27649 
   Usuario id    DEFAULT     l   ALTER TABLE ONLY public."Usuario" ALTER COLUMN id SET DEFAULT nextval('public."Usuario_id_seq"'::regclass);
 ;   ALTER TABLE public."Usuario" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            R          0    27757    Arquivo 
   TABLE DATA           ;   COPY public."Arquivo" (id, path, "bemMovelId") FROM stdin;
    public          postgres    false    230   �Z       N          0    27682    BemMovel 
   TABLE DATA           d   COPY public."BemMovel" (id, nome, descricao, valor, "orgaoId", "ingressoId", "setorId") FROM stdin;
    public          postgres    false    226   �Z       P          0    27691    Ingresso 
   TABLE DATA           C   COPY public."Ingresso" (id, "tipoIngresso", "orgaoId") FROM stdin;
    public          postgres    false    228   �Z       L          0    27673    Orgao 
   TABLE DATA           ?   COPY public."Orgao" (id, nome, "unidadeGestoraId") FROM stdin;
    public          postgres    false    224   [       D          0    27637    Setor 
   TABLE DATA           8   COPY public."Setor" (id, nome, "unidadeId") FROM stdin;
    public          postgres    false    216   *[       H          0    27655    UnidadeAdministrativa 
   TABLE DATA           F   COPY public."UnidadeAdministrativa" (id, nome, "orgaoId") FROM stdin;
    public          postgres    false    220   Q[       J          0    27664    UnidadeGestora 
   TABLE DATA           4   COPY public."UnidadeGestora" (id, nome) FROM stdin;
    public          postgres    false    222   [       F          0    27646    Usuario 
   TABLE DATA           V   COPY public."Usuario" (id, nome, email, senha, cpf, "setorId", "orgaoId") FROM stdin;
    public          postgres    false    218   �[       B          0    27625    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    214   (\       c           0    0    Arquivo_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Arquivo_id_seq"', 1, false);
          public          postgres    false    229            d           0    0    BemMovel_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."BemMovel_id_seq"', 1, false);
          public          postgres    false    225            e           0    0    Ingresso_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Ingresso_id_seq"', 1, false);
          public          postgres    false    227            f           0    0    Orgao_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Orgao_id_seq"', 1, true);
          public          postgres    false    223            g           0    0    Setor_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Setor_id_seq"', 2, true);
          public          postgres    false    215            h           0    0    UnidadeAdministrativa_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."UnidadeAdministrativa_id_seq"', 1, true);
          public          postgres    false    219            i           0    0    UnidadeGestora_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."UnidadeGestora_id_seq"', 2, true);
          public          postgres    false    221            j           0    0    Usuario_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Usuario_id_seq"', 7, true);
          public          postgres    false    217            �           2606    27764    Arquivo Arquivo_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Arquivo"
    ADD CONSTRAINT "Arquivo_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Arquivo" DROP CONSTRAINT "Arquivo_pkey";
       public            postgres    false    230            �           2606    27689    BemMovel BemMovel_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."BemMovel"
    ADD CONSTRAINT "BemMovel_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."BemMovel" DROP CONSTRAINT "BemMovel_pkey";
       public            postgres    false    226            �           2606    27698    Ingresso Ingresso_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Ingresso"
    ADD CONSTRAINT "Ingresso_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Ingresso" DROP CONSTRAINT "Ingresso_pkey";
       public            postgres    false    228            �           2606    27680    Orgao Orgao_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Orgao"
    ADD CONSTRAINT "Orgao_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Orgao" DROP CONSTRAINT "Orgao_pkey";
       public            postgres    false    224            �           2606    27644    Setor Setor_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Setor"
    ADD CONSTRAINT "Setor_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Setor" DROP CONSTRAINT "Setor_pkey";
       public            postgres    false    216            �           2606    27662 0   UnidadeAdministrativa UnidadeAdministrativa_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."UnidadeAdministrativa"
    ADD CONSTRAINT "UnidadeAdministrativa_pkey" PRIMARY KEY (id);
 ^   ALTER TABLE ONLY public."UnidadeAdministrativa" DROP CONSTRAINT "UnidadeAdministrativa_pkey";
       public            postgres    false    220            �           2606    27671 "   UnidadeGestora UnidadeGestora_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."UnidadeGestora"
    ADD CONSTRAINT "UnidadeGestora_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."UnidadeGestora" DROP CONSTRAINT "UnidadeGestora_pkey";
       public            postgres    false    222            �           2606    27653    Usuario Usuario_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Usuario"
    ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Usuario" DROP CONSTRAINT "Usuario_pkey";
       public            postgres    false    218            �           2606    27633 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    214            �           1259    27709    Usuario_cpf_key    INDEX     M   CREATE UNIQUE INDEX "Usuario_cpf_key" ON public."Usuario" USING btree (cpf);
 %   DROP INDEX public."Usuario_cpf_key";
       public            postgres    false    218            �           1259    27708    Usuario_email_key    INDEX     Q   CREATE UNIQUE INDEX "Usuario_email_key" ON public."Usuario" USING btree (email);
 '   DROP INDEX public."Usuario_email_key";
       public            postgres    false    218            �           2606    27765    Arquivo Arquivo_bemMovelId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Arquivo"
    ADD CONSTRAINT "Arquivo_bemMovelId_fkey" FOREIGN KEY ("bemMovelId") REFERENCES public."BemMovel"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 M   ALTER TABLE ONLY public."Arquivo" DROP CONSTRAINT "Arquivo_bemMovelId_fkey";
       public          postgres    false    230    226    3237            �           2606    27740 !   BemMovel BemMovel_ingressoId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."BemMovel"
    ADD CONSTRAINT "BemMovel_ingressoId_fkey" FOREIGN KEY ("ingressoId") REFERENCES public."Ingresso"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 O   ALTER TABLE ONLY public."BemMovel" DROP CONSTRAINT "BemMovel_ingressoId_fkey";
       public          postgres    false    226    228    3239            �           2606    27735    BemMovel BemMovel_orgaoId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."BemMovel"
    ADD CONSTRAINT "BemMovel_orgaoId_fkey" FOREIGN KEY ("orgaoId") REFERENCES public."Orgao"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 L   ALTER TABLE ONLY public."BemMovel" DROP CONSTRAINT "BemMovel_orgaoId_fkey";
       public          postgres    false    3235    226    224            �           2606    27770    BemMovel BemMovel_setorId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."BemMovel"
    ADD CONSTRAINT "BemMovel_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES public."Setor"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 L   ALTER TABLE ONLY public."BemMovel" DROP CONSTRAINT "BemMovel_setorId_fkey";
       public          postgres    false    226    3225    216            �           2606    27745    Ingresso Ingresso_orgaoId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Ingresso"
    ADD CONSTRAINT "Ingresso_orgaoId_fkey" FOREIGN KEY ("orgaoId") REFERENCES public."Orgao"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 L   ALTER TABLE ONLY public."Ingresso" DROP CONSTRAINT "Ingresso_orgaoId_fkey";
       public          postgres    false    3235    228    224            �           2606    27730 !   Orgao Orgao_unidadeGestoraId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Orgao"
    ADD CONSTRAINT "Orgao_unidadeGestoraId_fkey" FOREIGN KEY ("unidadeGestoraId") REFERENCES public."UnidadeGestora"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 O   ALTER TABLE ONLY public."Orgao" DROP CONSTRAINT "Orgao_unidadeGestoraId_fkey";
       public          postgres    false    222    3233    224            �           2606    27710    Setor Setor_unidadeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Setor"
    ADD CONSTRAINT "Setor_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES public."UnidadeAdministrativa"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 H   ALTER TABLE ONLY public."Setor" DROP CONSTRAINT "Setor_unidadeId_fkey";
       public          postgres    false    220    216    3231            �           2606    27725 8   UnidadeAdministrativa UnidadeAdministrativa_orgaoId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."UnidadeAdministrativa"
    ADD CONSTRAINT "UnidadeAdministrativa_orgaoId_fkey" FOREIGN KEY ("orgaoId") REFERENCES public."Orgao"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 f   ALTER TABLE ONLY public."UnidadeAdministrativa" DROP CONSTRAINT "UnidadeAdministrativa_orgaoId_fkey";
       public          postgres    false    224    220    3235            �           2606    27720    Usuario Usuario_orgaoId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Usuario"
    ADD CONSTRAINT "Usuario_orgaoId_fkey" FOREIGN KEY ("orgaoId") REFERENCES public."Orgao"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 J   ALTER TABLE ONLY public."Usuario" DROP CONSTRAINT "Usuario_orgaoId_fkey";
       public          postgres    false    218    3235    224            �           2606    27715    Usuario Usuario_setorId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Usuario"
    ADD CONSTRAINT "Usuario_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES public."Setor"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 J   ALTER TABLE ONLY public."Usuario" DROP CONSTRAINT "Usuario_setorId_fkey";
       public          postgres    false    218    216    3225            R      x������ � �      N      x������ � �      P      x������ � �      L      x�3�tsp��4����� �      D      x�3��sv�4����� �      H      x�3��sv�usp��4����� :M�      J      x�3�I-.I�2�tsp������ @N�      F   k   x�3�L,Na��������\N�$C����R���,�po�$�l�Hs�,�lg_'3�H}7����l�*=�L�T�0=c#��TNCsCCK##sN#NC�=... ��      B   �   x�m�;
�0k��������!rC�ܤ����:�f��h�2�H�.M-�r�Inb3s�Ř��),���4����d�Y�:������BG�+'�D����,�!%�[�RAay�����o�25�;�xl1�/�M-�     