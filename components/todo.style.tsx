import { createStyles } from "@mantine/core";

    export const useStyle = createStyles((theme) => ({
        Paper: {
            width: '100%',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.colors.gray[6] : theme.black,
            borderRadius: theme.radius.lg,
            fontSize: theme.fontSizes.lg,
            paddingLeft: 6,
            paddingRight: theme.spacing.md,
            margin: theme.spacing.md,

        },
        todoinput: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
            borderBottom: '1px solid',
            borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0],
            width: '85%',
            height: '50px',
        },
        todoButton: {
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0],
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.dark[5],
            color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
            fontSize: '20px',

          '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3],
            color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.black,
          },

        },
        checkButton: {
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[0],
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.dark[5],
            color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
        },
        item: {
            display: 'flex',
            alignItems: 'left',
            borderRadius: theme.radius.md,
            border: `1px solid ${
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
            padding: `${theme.spacing.sm}px ${theme.spacing.xl}px`,
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
            marginBottom: theme.spacing.sm,
            width: '100%',
          },

    }));